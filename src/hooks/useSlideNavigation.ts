import { useCallback, useEffect, useState } from 'react'

const isEditableTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  const tagName = target.tagName.toLowerCase()

  return (
    target.isContentEditable ||
    tagName === 'input' ||
    tagName === 'textarea' ||
    tagName === 'select'
  )
}

const clampIndex = (index: number, total: number) =>
  Math.min(Math.max(index, 0), Math.max(total - 1, 0))

export const useSlideNavigation = (slideIds: string[]) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const sections = slideIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]

        if (!activeEntry) {
          return
        }

        const nextIndex = slideIds.indexOf(activeEntry.target.id)

        if (nextIndex >= 0) {
          setActiveIndex(nextIndex)
        }
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-8% 0px -18% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [slideIds])

  const goToSlide = useCallback((index: number) => {
    const safeIndex = clampIndex(index, slideIds.length)
    const target = document.getElementById(slideIds[safeIndex])

    if (!target) {
      return
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [slideIds])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target)) {
        return
      }

      const key = event.key

      if (
        key !== 'ArrowDown' &&
        key !== 'ArrowUp' &&
        key !== 'PageDown' &&
        key !== 'PageUp' &&
        key !== 'Home' &&
        key !== 'End' &&
        key !== ' '
      ) {
        return
      }

      event.preventDefault()

      if (key === 'Home') {
        goToSlide(0)
        return
      }

      if (key === 'End') {
        goToSlide(slideIds.length - 1)
        return
      }

      const direction = key === 'ArrowUp' || key === 'PageUp' ? -1 : 1
      goToSlide(activeIndex + direction)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, goToSlide, slideIds])

  return {
    activeIndex,
    goToSlide,
  }
}
