export interface IWithId {
  id: string
}

export interface IWithImage {
  image: string
}
export interface IWithName {
  name: string
}

export interface ICharacterShort extends IWithId, IWithImage {
  name: string
}

export interface ILocation extends IWithId, IWithName {
  type: string
  dimension: string
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
  location?: ILocation
  origin?: ILocation
}
