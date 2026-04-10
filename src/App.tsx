import { NavigationHint } from './components/NavigationHint'
import { ProgressIndicator } from './components/ProgressIndicator'
import { presentationData } from './data/presentationData'
import { useSlideNavigation } from './hooks/useSlideNavigation'
import { AgendaSlide } from './sections/AgendaSlide'
import { AlternativesSlide } from './sections/AlternativesSlide'
import { ClosingSlide } from './sections/ClosingSlide'
import { ConclusionsSlide } from './sections/ConclusionsSlide'
import { CoverSlide } from './sections/CoverSlide'
import { MatrixSlide } from './sections/MatrixSlide'
import { ObjectivesSlide } from './sections/ObjectivesSlide'
import { ProblemContextSlide } from './sections/ProblemContextSlide'
import { ProblemTreeSlide } from './sections/ProblemTreeSlide'
import { StakeholdersSlide } from './sections/StakeholdersSlide'

const slideComponents = [
  CoverSlide,
  AgendaSlide,
  ProblemContextSlide,
  StakeholdersSlide,
  ProblemTreeSlide,
  ObjectivesSlide,
  AlternativesSlide,
  MatrixSlide,
  ConclusionsSlide,
  ClosingSlide,
]

function App() {
  const { sequence } = presentationData
  const slideIds = sequence.map((item) => item.id)
  const { activeIndex, goToSlide } = useSlideNavigation(slideIds)

  return (
    <div className="relative min-h-[100svh] overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_24%)]" />
      <ProgressIndicator
        items={sequence}
        activeIndex={activeIndex}
        onSelect={goToSlide}
      />
      <NavigationHint activeIndex={activeIndex} total={sequence.length} />
      <main className="relative z-10 snap-y snap-mandatory">
        {slideComponents.map((Slide, index) => (
          <Slide key={sequence[index].id} />
        ))}
      </main>
    </div>
  )
}

export default App
