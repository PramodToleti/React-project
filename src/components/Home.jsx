import { useEffect } from "react"
import { fetchData } from "../redux/slices/ItemSlice"
import Card from "./Card"
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks"

const Home = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(({ items }) => items)

  useEffect(() => {
    if (state.status === "idle") {
      dispatch(fetchData())
    }
  }, [dispatch, state.status])

  return (
    <div>
      <h1 className="text-center text-3xl py-9 font-semibold">Home</h1>
      {state.status === "loading" ? (
        <h1 className="text-center text-3xl py-9 font-semibold">Loading...</h1>
      ) : (
        <div className="flex justify-center gap-7 flex-wrap">
          {state.items?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
