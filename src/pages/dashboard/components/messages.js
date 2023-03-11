import {  Text, VStack, IconButton,Box,InputGroup,Avatar,Flex,Input,Popover, PopoverTrigger, PopoverContent, PopoverBody,Button,PopoverHeader,PopoverArrow,PopoverCloseButton } from "@chakra-ui/react";
import {BsSearch, BsThreeDotsVertical} from "react-icons/bs";
import { FaPhone, FaVideo } from "react-icons/fa";
import send_ic from "../../../assets/svg/send.svg";
import image_ic from "../../../assets/svg/image.svg";
import icons_ic from "../../../assets/svg/icons.svg";
import attachment from "../../../assets/svg/attachment.svg";
export default function Messages() {
    return(
         <VStack bgColor="white" style={{width:"67%"}}>
             <div className="message_panel">
              <div className="message_headers">
                <Flex spacing='4'>
                  <Flex flex='1' gap='2' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                    <Box>
                      <Text>Segun Adebayo</Text>
                    </Box>
                  </Flex>
                    <IconButton variant='ghost' colorScheme='gray' aria-label='See menu' icon={<BsSearch color="#536475"/>}/>                    
                    <IconButton variant='ghost' colorScheme='gray' aria-label='See menu' icon={<FaPhone color="#536475"/>}/>
                    <IconButton variant='ghost' colorScheme='gray' aria-label='See menu' icon={<FaVideo color="gray"/>}/>
                    <IconButton variant='ghost' colorScheme='gray' aria-label='See menu' icon={<BsThreeDotsVertical color="#536475"/>}/>
                </Flex>
               </div>
               <div className="messages_boxes">
                 
               </div>
               <div className="message_footers">
                <Flex spacing='4'>
                  <Flex flex='1' gap='2' alignItems='center' flexWrap='wrap' style={{marginRight:"8%"}}>
                    <InputGroup>
                      <Input type='text' placeholder='Enter message' bg={"brand.300"}/>
                    </InputGroup>
                  </Flex>
                    <IconButton variant='ghost' colorScheme='gray' aria-label='icons' icon={<img src={icons_ic} alt="icon"/>}/>                    
                    <IconButton variant='ghost' colorScheme='gray' aria-label='Attachment' icon={<img src={attachment} alt="attachment"/>}/>
                    <IconButton variant='ghost' colorScheme='gray' aria-label='image' icon={<img src={image_ic} alt="images"/>}/>
                    <IconButton variant='solid' colorScheme='blue' aria-label='Send message' icon={<img src={send_ic} alt="send"/>}/>
                </Flex>
               </div>
             </div>  
          </VStack>
    );
}