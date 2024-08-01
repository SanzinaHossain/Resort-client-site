export default function Loading({ isLoading }) {
  return (
    <>
      {isLoading ? (
        <div>
          <span className="loading loading-dots loading-lg text-info"></span>
        </div>
      ) : null}
    </>
  )
}
