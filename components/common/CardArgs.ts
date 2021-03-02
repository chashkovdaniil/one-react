class CardArgs {
    title: string;
    image: string;
    
    constructor(obj: any) {
        this.title = obj.title;
        this.image = obj.image;
    }
}
export default CardArgs;