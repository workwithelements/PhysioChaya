import { useEffect } from 'react'
import { BodyScene } from '../scene/BodyScene'
import { JointPanel } from '../ui/JointPanel'
import { useApp } from '../store'
import { GUS_LINES, randLine } from '../data/gusLines'

export function Explore() {
  const setGus = useApp((s) => s.setGus)
  const setSelectedJoint = useApp((s) => s.setSelectedJoint)
  useEffect(() => {
    setGus('idle', randLine(GUS_LINES.explorePrompt))
    return () => setSelectedJoint(null)
  }, [setGus, setSelectedJoint])

  return (
    <div className="explore">
      <div className="canvas-wrap">
        <div className="canvas-hint">Drag / swipe to rotate · pinch or scroll to zoom · tap a marker</div>
        <BodyScene />
      </div>
      <JointPanel />
    </div>
  )
}
