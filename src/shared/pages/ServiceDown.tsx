export default function ServiceDown({ reset }: { reset: () => void }) {
  return (
    <div>
      <span>服务已终止</span>
      <button onClick={reset}>点击重试</button>
    </div>
  )
}
