import { VStack,Box, Stack, Avatar,WrapItem } from "@chakra-ui/react";
import Chat from "../../../assets/svg/chat.svg";
import message from "../../../assets/svg/message.svg";
import user_group_ic from "../../../assets/svg/user_group.svg";
import user_ic from "../../../assets/svg/user.svg";
import language_ic from "../../../assets/svg/language.svg";
import mode_ic from "../../../assets/svg/mode.svg";
import setting_ic from "../../../assets/svg/setting.svg";

export default function SideIcons() { 
    return( 
          <VStack  bgColor="white" style={{width:"6%"}} px="auto" py={"5"}  textAlign="center">
            <Stack direction="column" spacing={"20"} style={{marginLeft:"5px"}}>
              <Box><Stack><img src={Chat} alt="chat" className="chatIcon"/></Stack></Box>
              <Stack spacing={"3"} textAlign={"center"}>              
                <Stack><img src={user_ic} alt="user" className="sideIcon"/></Stack>
                <Stack><img src={message} alt="message" className="sideIcon"/></Stack>
                <Stack><img src={user_group_ic} alt="group" className="sideIcon"/></Stack>
              </Stack>
              <Stack spacing={"3"}>              
                <Stack><img src={setting_ic} alt="user" className="sideIcon" style={{width:"60%"}}/></Stack>
                <Stack><img src={language_ic} alt="message" className="sideIcon"/></Stack>
                <Stack><img src={mode_ic} alt="group" className="sideIcon"/></Stack>
              </Stack>
              <WrapItem>
                <Avatar size="md" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' className="avatarIcon"/>
              </WrapItem>
            </Stack>
          </VStack>
    );
}