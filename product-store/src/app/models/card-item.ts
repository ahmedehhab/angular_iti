export interface CartItem {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    images?: string[];      
    quantity: number;       
    stock: number;         
    category?: string;      
    description?: string;   
}