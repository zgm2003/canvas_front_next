import { Focus, LoaderCircle } from 'lucide-react'

export function AppBootstrap() {
  return (
    <main className="bootstrap" aria-labelledby="bootstrap-title">
      <div className="bootstrap__grid" aria-hidden="true" />

      <div className="bootstrap__meta bootstrap__meta--top" aria-hidden="true">
        <span>IC / WORKSPACE</span>
        <span>X 0000&nbsp;&nbsp;Y 0000</span>
      </div>

      <section className="bootstrap__center">
        <div className="bootstrap__mark" aria-hidden="true">
          <span className="bootstrap__axis bootstrap__axis--horizontal" />
          <span className="bootstrap__axis bootstrap__axis--vertical" />
          <Focus strokeWidth={1.5} />
        </div>

        <div className="bootstrap__identity">
          <p className="bootstrap__edition">INFINITE CANVAS</p>
          <h1 id="bootstrap-title">无限画布</h1>
        </div>

        <div className="bootstrap__status" role="status" aria-label="正在准备工作区">
          <LoaderCircle className="bootstrap__loader" aria-hidden="true" strokeWidth={1.75} />
          <span>正在准备工作区</span>
        </div>
      </section>

      <div className="bootstrap__meta bootstrap__meta--bottom" aria-hidden="true">
        <span>CANVAS_DOCUMENT_V1</span>
        <span>100%</span>
      </div>
    </main>
  )
}
