import { styled } from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container =styled.div`
  
`;

const Wrapper =styled.div`
  padding: 20px;
`;

const Title =styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top =styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton=styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type==="filled" && "none"};
  background-color: ${props=>props.type==="filled" ? "black" : "transparent"};
  color:${props=>props.type==="filled" && "white"};
`;

const TopText=styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const TopTexts=styled.div`

`;

const Bottom =styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info =styled.div`
  flex: 3;
`;

const Product=styled.div`
   display: flex;
   justify-content: space-between;
`;

const ProductDetail=styled.div`
  flex:2;
  display: flex;
`;

const Image=styled.img`
  width: 200px;
`;

const Details=styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`;

const ProductName=styled.div`

`;

const ProductId=styled.span`

`;

const ProductColor=styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`;

const ProductSize=styled.div`

`;

const PriceDetail=styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount=styled.div`
     font-size: 24px;
     margin: 5px;
`;

const ProductPrice=styled.div`
   font-size: 30px;
   font-weight: 200;
`;

const Hr=styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary =styled.span`
  flex:1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle=styled.h1`
  font-weight: 200;
`;

const SummaryItem=styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type==="total" && "500"};
  font-size: font-weight: ${props=>props.type==="total" && "24px"};
`;

const SummaryItemText=styled.span`

`;

const SummaryItemPrice=styled.span`

`;

const Button=styled.button`
 width: 100%;
 padding: 10px;
 background-color: black;
 color: white;
 font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                      <Image src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe6%2F97%2Fe697620e89b291a011397ba03058fe8aa8d5f78a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"></Image>
                      <Details>
                        <ProductName><b>Product:</b> 90s Baggy High Jeans</ProductName>
                        <ProductId><b>ID:</b> 1139990001</ProductId>
                        <ProductColor color="lightblue"></ProductColor>
                        <ProductSize><b>Size:</b> 32</ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                       <ProductAmountContainer>
                           <Add />
                           <ProductAmount>2</ProductAmount>
                           <Remove />
                       </ProductAmountContainer>
                       <ProductPrice>$ 22</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr />
                <Product>
                    <ProductDetail>
                      <Image src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7f%2Fd5%2F7fd584b08c0be4d6d31c29353418a85b88ab35c4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"></Image>
                      <Details>
                        <ProductName><b>Product:</b> Oversized printed T-shirt</ProductName>
                        <ProductId><b>ID:</b> 1163120003</ProductId>
                        <ProductColor color="beige"></ProductColor>
                        <ProductSize><b>Size:</b> L</ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                       <ProductAmountContainer>
                           <Add />
                           <ProductAmount>1</ProductAmount>
                           <Remove />
                       </ProductAmountContainer>
                       <ProductPrice>$ 18</ProductPrice>
                    </PriceDetail>
                </Product>
                
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 62</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$ 62</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
      
    </Container>
  )
}

export default Cart
