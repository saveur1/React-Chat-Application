import {  Text, VStack, Box, InputGroup,InputLeftElement,Input,Avatar,AvatarBadge,Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
export default function ListOfCharts() {
    return(
        <VStack bgColor="brand.100" style={{width:"27%",padding:"0px"}} px={"0px"}>
           <div className="panel_wrapper">        
            <Box textAlign={"left"} mt={"5"} style={{width:"100%"}}>
                <Text fontWeight={"bold"} style={{textAlign:"left"}}>Chats</Text>
                <InputGroup mt={"2"}>
                    <InputLeftElement pointerEvents='none' children={<FaSearch style={{color:"#718298"}}/>} />
                    <Input type='search' placeholder='search users or messages' bg={"brand.300"}/>
                </InputGroup>
                <Flex gap={2} style={{width:"100%"}} marginTop="6">
                    <div className="activeUser">
                        <Avatar size={"xs"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' className="activeImg">
                            <AvatarBadge boxSize='1em' bg='green.500' />
                        </Avatar>
                        <div className="name">Ange</div>
                    </div>
                    <div className="activeUser">
                        <Avatar size={"xs"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' className="activeImg">
                            <AvatarBadge boxSize='1em' bg='green.500' />
                        </Avatar>
                        <div className="name">Ange</div>
                    </div>
                    <div className="activeUser">
                        <Avatar size={"xs"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' className="activeImg">
                            <AvatarBadge boxSize='1em' bg='green.500' />
                        </Avatar>
                        <div className="name">Ange</div>
                    </div>
                    <div className="activeUser">
                        <Avatar size={"xs"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' className="activeImg">
                            <AvatarBadge boxSize='1em' bg='green.500' />
                        </Avatar>
                        <div className="name">bivakumana</div>
                    </div>
                </Flex>

                <Text fontWeight={"bold"} style={{textAlign:"left",color:"#536475"}} mt={"5"}>Recent</Text>

                <Flex spacing='4' mt={"5"}>
                    <Flex flex='1' gap='4' alignItems='center'>
                        <Avatar size="md" name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                        <Box>
                            <div className="userChatName">Segun Adebayo</div>
                            <Text className="lastestMsg" mt={"4px"}>Creator, Chakra UI</Text>
                        </Box>
                    </Flex>
                    <VStack spacing={"0px"}>
                       <div className="chatTimer">10:30</div>
                       <div className="notPanel">1</div>
                    </VStack>
                </Flex>
                <Flex spacing='4' mt={"5"}>
                    <Flex flex='1' gap='4' alignItems='center'>
                        <Avatar name='Bikorimana Saveur' src='https://bit.ly/tioluwani-kolawole' size="md"/>
                        <Box>
                            <div className="userChatName">Bikorimana Saveur</div>
                            <Text className="lastestMsg" mt={"4px"}>hello ,how are you?</Text>
                        </Box>
                    </Flex>
                    <VStack spacing={"0px"}>
                       <div className="chatTimer">01:30</div>
                       <div className="notPanel">3</div>
                    </VStack>
                </Flex>
                <Flex spacing='4' mt={"5"}>
                    <Flex flex='1' gap='4' alignItems='center'>
                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                        <Box>
                            <div className="userChatName">Kent Dodds</div>
                            <Text className="lastestMsg" mt={"4px"}>Hi I've missed you.</Text>
                        </Box>
                    </Flex>
                    <VStack spacing={"0px"}>
                       <div className="chatTimer">10:30</div>
                       <div className="notPanel">10</div>
                    </VStack>
                </Flex>
                <Flex spacing='4' mt={"5"}>
                    <Flex flex='1' gap='4' alignItems='center'>
                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                        <Box>
                            <div className="userChatName">Ryan Florence</div>
                            <Text className="lastestMsg" mt={"4px"}>when are you coming?</Text>
                        </Box>
                    </Flex>
                    <VStack spacing={"0px"} className="rightNoti">
                       <div className="chatTimer">12:90</div>
                       <div className="notPanel">8</div>
                    </VStack>
                </Flex>
                <Flex spacing='4' mt={"5"}>
                    <Flex flex='1' gap='4' alignItems='center'>
                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                        <Box>
                            <div className="userChatName">Prosper Otemuyiwa</div>
                            <Text className="lastestMsg" mt={"4px"}>are you sure?</Text>
                        </Box>
                    </Flex>
                    <VStack spacing={"0px"}>
                       <div className="chatTimer">10:30</div>
                       <div className="notPanel">10</div>
                    </VStack>
                </Flex>
                <Flex spacing='4' mt={"5"}>
                    <Flex flex='1' gap='4' alignItems='center'>
                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        <Box>
                            <div className="userChatName">Christian Nwamba</div>
                            <Text className="lastestMsg" mt={"4px"}>Yeah I know.</Text>
                        </Box>
                    </Flex>
                    <VStack spacing={"0px"}>
                       <div className="chatTimer">10:30</div>
                    </VStack>
                </Flex>
                <Flex spacing='4' mt={"5"}>
                    <Flex flex='1' gap='4' alignItems='center'>
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                        <Box>
                            <div className="userChatName">Segun Adebayo</div>
                            <Text className="lastestMsg" mt={"4px"}>Creator, Chakra UI</Text>
                        </Box>
                    </Flex>
                    <VStack spacing={"0px"}>
                       <div className="chatTimer">10:30</div>
                       <div className="notPanel">10</div>
                    </VStack>
                </Flex>
                <Flex spacing='4' mt={"5"}>
                    <Flex flex='1' gap='4' alignItems='center'>
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                        <Box>
                            <div className="userChatName">Segun Adebayo</div>
                            <Text className="lastestMsg" mt={"4px"}>Creator, Chakra UI</Text>
                        </Box>
                    </Flex>
                    <VStack spacing={"0px"}>
                       <div className="chatTimer">10:30</div>
                       <div className="notPanel">10</div>
                    </VStack>
                </Flex>
                <Flex spacing='4' mt={"5"}>
                    <Flex flex='1' gap='4' alignItems='center'>
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                        <Box>
                            <div className="userChatName">Segun Adebayo</div>
                            <Text className="lastestMsg" mt={"4px"}>Creator, Chakra UI</Text>
                        </Box>
                    </Flex>
                    <VStack spacing={"0px"}>
                       <div className="chatTimer">10:30</div>
                    </VStack>
                </Flex>
            </Box>
           </div>
        </VStack>
    );
}