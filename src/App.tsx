import {useState} from 'react';
import {useQuery} from 'react-query'
// Components
import Item from './Item/Item'
import { Drawer, LinearProgress, Grid, Badge} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material'
// Styles
import {Wrapper, StyledButton} from './App.styles';
// types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => 
await(await fetch('https://fakestoreapi.com/products')).json();

const App = () =>  {
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);


  const getTotolItems = (item: CartItemType[]) => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if(isLoading) return <LinearProgress/>
  if(error) return <div>Something went wrong</div>
  
  return (
    <Wrapper> 
      <Drawer anchor='right' open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <StyledButton onClick={() => isCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            {/* <AddShoppingCartIcon/> */}
          </Badge>
        </StyledButton>
      </Drawer>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
