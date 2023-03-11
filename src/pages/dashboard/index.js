import { Box, Grid, Stack} from "@chakra-ui/react";
import ListOfCharts from "./components/ListOfCharts";
import Messages from "./components/messages";
import SideIcons from "./components/sideIcons";

export default function Dashboard()
{
    return(
        <Box fontSize="xl" overflow="hidden">
        <Grid minH="100vh" overflow="hidden">
         <Stack direction="row" spacing={0} style={{width:"100%"}} overflow="hidden">
          <SideIcons />
          <ListOfCharts />
          <Messages />
         </Stack>
        </Grid>
      </Box>
    );
}