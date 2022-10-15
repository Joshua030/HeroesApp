import { heroes } from "../data/heroes"

export const getHeroById = (heroId) => {
  return (
   heroes.find(({id})=>id === heroId)
  )
}
