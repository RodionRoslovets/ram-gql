export interface IWithId {
  id: string
}

export interface IWithImage {
  image: string
}

export interface ICharacter extends IWithId, IWithImage {
  name: string
}

//pages
export interface IMainPage {
  characters: ICharacter[]
}
