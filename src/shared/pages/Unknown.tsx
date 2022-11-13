export default function Unknown({ reset }: { reset: () => void }) {
  return (
    <div>
      <span>发生未知错误</span>
      <button onClick={reset}>点击重试</button>
    </div>
  )
}
