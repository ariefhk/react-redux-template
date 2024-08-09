import LoadingBar from "react-redux-loading-bar"

export default function TopLoadingBar() {
  return (
    <div className="sticky top-0 w-full z-30">
      <LoadingBar
        style={{
          backgroundColor: "#FF0000", // Set this to transparent to avoid conflicts
          height: "2px",
          width: "100%",
        }}
      />
    </div>
  )
}
