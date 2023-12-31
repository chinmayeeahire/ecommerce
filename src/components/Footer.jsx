import { styled } from "styled-components"
import {Facebook, Instagram, Twitter, Pinterest,MailOutline,Room,Phone } from "@mui/icons-material";
import {mobile} from '../responsive';


const Container=styled.div`
   display: flex;
   ${mobile({flexDirection: "column"})};
`;

const Left=styled.div`
   flex:1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`;

const Logo=styled.h1`

`;

const Desc=styled.p`
  margin: 20px 0px;
`;

const SocialContainer=styled.div`
   display: flex;
`;

const Socialicon=styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Title=styled.h1`
   margin-bottom: 30px;
`;

const List=styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`;

const ListItem=styled.li`
   width: 50%;
   margin-bottom: 10px;
`;

const Center=styled.div`
   flex:1;
   padding: 20px;
   ${mobile({display: "none"})};
`;


const Right=styled.div`
   flex:1;
   ${mobile({backgroundColor: "#fff8f8"})};
`;

const ContactItem=styled.div`
  margin-bottom: 20px;
  display:flex;
  align-items: center;
`;

const Payment=styled.img`
   width: 100%;
   
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ECART.</Logo>
        <Desc>
        There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
            <Socialicon color="3b5999">
               <Facebook />
            </Socialicon>
            <Socialicon color="e4405f">
               <Instagram />
            </Socialicon>
            <Socialicon color="55ACEE">
               <Twitter />
            </Socialicon>
            <Socialicon color="e60023">
               <Pinterest />
            </Socialicon>
        </SocialContainer>
      </Left>
      <Center>
         <Title>Useful Links</Title>
         <List>
         <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
         </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@ecart.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
