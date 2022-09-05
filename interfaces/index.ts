export interface IWithId {
  id: string
}

export interface IWithImage {
  image: string
}

export interface ICharacterShort extends IWithId, IWithImage {
  name: string
}

//pages
export interface IMainPage {
  characters: ICharacterShort[]
}

export interface ICharacterDetail extends ICharacterShort {
  status: string
  species: string
  type: string
  gender: string
  created: string
}
