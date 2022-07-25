import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MovieService } from "../movie.service";
import { Movie } from "../movie/movie.module";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @ViewChild('trendingList', { read: ElementRef }) public trendingList!: ElementRef<any> ;
  @ViewChild('watchedList', { read: ElementRef }) public watchedList!: ElementRef<any> ;
  @ViewChild('movieSlider', { read: ElementRef }) public movieSlider!: ElementRef<any> ;
 
  constructor(private movieService: MovieService) { }
  counter=0
counter2=0
  counter3=0

  movies!:Movie[]
  trendingMovies:Movie[]=[]
  suggestedMovie!:Movie
  watchedMovies:Movie[]=[]

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(data=>{
      console.log(data)
      this.movies=data
      this.setTrandingMovies(data)
      this.setWatchedList(data)
      this.setSuggestedMovie()
    })
    

  }

  drop(event: CdkDragDrop<Movie[]>) {
    if (event.previousContainer === event.container) {
      console.log("///*")
      console.log(event.container.data)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.movies = [...new Set(this.movies)]
    } else {
      console.log(this.watchedMovies[0].id)
      console.log(this.watchedMovies)
      
      
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.watchedMovies = [...new Set(this.watchedMovies)]
      this.movies = [...new Set(this.movies)]
    }
  }




  setTrandingMovies(movies:Movie[]){
    let j=0
    for(let i=0;i<movies.length;i++){
      if(movies[i].trend){
        this.trendingMovies[j]=movies[i]
        j++
      }
    }
    console.log(this.trendingMovies)
  }
  setSuggestedMovie(){
    console.log(Math.floor(Math.random() * this.trendingMovies.length))
    this.suggestedMovie= this.trendingMovies[Math.floor(Math.random() * this.trendingMovies.length) ];
  }
  setWatchedList(movies:Movie[]){
    let j=0
    for(let i=0;i<movies.length;i++){
      if(movies[i].watchedList){
        this.watchedMovies[j]=movies[i]
        j++
      }
    }
  }

  public scrollRight(): void {
    this.trendingList.nativeElement.scrollTo({ left: (this.trendingList.nativeElement.scrollLeft + 600), behavior: 'smooth' });
    this.counter++
  }

  public scrollLeft(): void {
    this.trendingList.nativeElement.scrollTo({ left: (this.trendingList.nativeElement.scrollLeft - 600), behavior: 'smooth' });
    this.counter--
  }
  public scrollRight2(): void {
    this.movieSlider.nativeElement.scrollTo({ left: (this.movieSlider.nativeElement.scrollLeft + 300), behavior: 'smooth' });
    this.counter2++
  }

  public scrollLeft2(): void {
    this.movieSlider.nativeElement.scrollTo({ left: (this.movieSlider.nativeElement.scrollLeft - 300), behavior: 'smooth' });
    this.counter2--
  }
  public scrollRight3(): void {
    this.watchedList.nativeElement.scrollTo({ left: (this.watchedList.nativeElement.scrollLeft + 400), behavior: 'smooth' });
    this.counter3++
  }

  public scrollLeft3(): void {
    this.watchedList.nativeElement.scrollTo({ left: (this.watchedList.nativeElement.scrollLeft - 400), behavior: 'smooth' });
    this.counter3--
  }

  setFavorite(id:any){
    for(let i=0;i<this.movies.length;i++){
    if(this.movies[i].id==id){
      console.log(this.movies[i].favorite)
      this.movies[i].favorite=!this.movies[i].favorite
      console.log(this.movies[i].favorite)
    }
  }
}

}
