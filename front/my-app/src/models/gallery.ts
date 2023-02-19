// interface defines the structure of an object,
//  including its properties and methods,
//  but does not provide any implementation(אובייקט שמממש את הקלאס)

export interface IImage  {
    id? : number 
    title:string 
    description : string
    image : string
}

// export interface Images{
//     images : IImage[]
// }