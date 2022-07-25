import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie/movie.module';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route :ActivatedRoute,private movieService: MovieService) { }
selectedMovieId!:number
selectedMovie!:Movie
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.selectedMovieId= +params['id'];
      
     
          })
      this.movieService.getAllMovies().subscribe(data=>{
            console.log(data)
            for(let i=0;i<data.length;i++){
              if(data[i].id==this.selectedMovieId){
                this.selectedMovie=data[i]
              }
            }
        
          })
  }


}
