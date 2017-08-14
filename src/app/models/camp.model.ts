export class Camp {
  constructor(
    public _id: string,
    public name: string,
    public imageUrl: string,
    public content: string,
    public category: string,
    public ageGroup: string,
    public timePeriod: string,
    public shortDescription: string
  ){}
}