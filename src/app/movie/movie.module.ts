export class Movie {
  public id?: number;
  public title: string;
  public Released: string;
  public rating: number;
  public trend: boolean;
  public favorite: boolean;
  public watchedList: boolean;
  public poster1: string;
  public poster2: string;
  public genres: string[];
  public description: string;

  constructor(title: string, Released: string, rating: number, trend: boolean, favorite: boolean, watchedList: boolean,poster1:string,poster2:string,genres: string[], description: string) {
    this.title = title;
    this.Released=Released
    this.rating = rating;
    this.trend = trend;
    this.favorite = favorite;
    this.watchedList = watchedList;
    this.poster1 = poster1;
    this.poster2 = poster2;
    this.genres = genres;
    this.description = description;
  }
}