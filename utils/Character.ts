import { ICharacterDetail, ICharacterShort } from '../interfaces'
import { character } from '../__generated__/character'
import {
  main_pageVariables,
  main_page_characters,
} from '../__generated__/main_page'

export class MainPage {
  characters: ICharacterShort[]
  variables: main_pageVariables

  constructor(page: number) {
    this.variables = {
      page,
    }
  }

  public setCharacters(data: main_page_characters) {
    this.characters = data?.results?.map((res) => ({
      id: res.id,
      name: res.name,
      image: res.image,
    }))
  }
}

export class CharacterDetail {
  character: ICharacterDetail

  constructor(characterData: character) {
    this.character = {
      id: characterData.character.id,
      status: characterData.character.status,
      species: characterData.character.species,
      name: characterData.character.name,
      created: characterData.character.created,
      gender: characterData.character.gender,
      image: characterData.character.image,
      type: characterData.character.type,
      location: characterData.character.location,
      origin: characterData.character.origin,
    }
  }
}
