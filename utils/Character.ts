import { ICharacter } from '../interfaces'
import {
  main_pageVariables,
  main_page_characters,
} from '../__generated__/main_page'

export class MainPage {
  characters: ICharacter[]
  variables: main_pageVariables

  public setCharacters(data: main_page_characters) {
    this.characters = data?.results?.map((res) => ({
      id: `${res.__typename}__${res.id}`,
      name: res.name,
      image: res.image,
    }))
  }
  public setVariables(page) {
    this.variables = {
      page,
    }
  }
}
