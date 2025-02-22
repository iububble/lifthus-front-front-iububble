import React from "react";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";

import { Box, Heading, Stack, StackDivider, Text } from "@chakra-ui/layout";
import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/stat";

import "./calendar.css";

import { ThemeColor } from "../../../../common/styles/theme.style";

import useUserStore from "../../../../store/user.zustand";

import { Card, CardBody } from "@chakra-ui/card";
import {
  CalendarIcon,
  DragHandleIcon,
  LinkIcon,
  SettingsIcon,
} from "@chakra-ui/icons";

import CalendarHeatmap from "react-calendar-heatmap";
import { Avatar, FormLabel } from "@chakra-ui/react";

const ProfileTab = () => {
  const user_info = useUserStore((state) => state);
  const sbd_total = user_info.squat + user_info.benchpress + user_info.deadlift;
  return (
    <Tabs
      size="lg"
      bgColor={ThemeColor.backgroundColorDarker}
      variant="unstyled"
      align="end"
      borderBottomRadius={"1em"}
    >
      <TabList>
        <Tab
          w="25%"
          _hover={{ bgColor: "green.300" }}
          _selected={{ color: "white", bg: "green.400" }}
        >
          <CalendarIcon />
        </Tab>
        <Tab
          w="25%"
          _hover={{ bgColor: "green.300" }}
          _selected={{ color: "white", bg: "green.400" }}
        >
          <LinkIcon />
        </Tab>
        <Tab
          w="25%"
          _hover={{ bgColor: "blue.400" }}
          _selected={{ color: "white", bg: "blue.500" }}
        >
          <DragHandleIcon />
        </Tab>
        <Tab
          w="25%"
          _hover={{ bgColor: "yellow.400" }}
          _selected={{ color: "white", bg: "yellow.500" }}
          paddingLeft="1.5em"
          paddingRight="1.5em"
        >
          <SettingsIcon />
        </Tab>
      </TabList>
      <TabPanels textAlign={"center"}>
        <TabPanel>
          <CalendarHeatmap
            startDate={new Date(new Date().setMonth(new Date().getMonth() - 9))}
            endDate={new Date()}
            monthLabels={[]}
            values={[
              { date: "2023-01-02", count: 2 },
              { date: "2023-01-03", count: 3 },
              { date: "2023-01-04", count: 4 },
              { date: "2023-01-05", count: 4 },
              { date: "2023-01-06", count: 2 },
              { date: "2023-01-07", count: 4 },
              { date: "2023-01-08", count: 4 },
              { date: "2023-01-09", count: 4 },
            ]}
            classForValue={(value) => {
              if (!value) {
                return "color-empty";
              }
              return `color-scale-${value.count}`;
            }}
          />
          <div>
            <Avatar
              margin={"0.2em"}
              name={"Powerlifter"}
              bgColor={ThemeColor.basicColor}
              src={
                "https://pngimg.com/uploads/powerlifting/powerlifting_PNG44.png"
              }
              sx={{
                "@media screen and (max-width: 350px)": {
                  w: "2em",
                  h: "2em",
                },
              }}
            />

            <Avatar
              margin={"0.2em"}
              name={"Powerlifter"}
              bgColor={ThemeColor.basicColor}
              src={
                "https://pngimg.com/uploads/powerlifting/powerlifting_PNG44.png"
              }
              sx={{
                "@media screen and (max-width: 350px)": {
                  w: "2em",
                  h: "2em",
                },
              }}
            />

            <Avatar
              margin={"0.2em"}
              name={"Powerlifter"}
              bgColor={ThemeColor.basicColor}
              src={
                "https://pngimg.com/uploads/powerlifting/powerlifting_PNG44.png"
              }
              sx={{
                "@media screen and (max-width: 350px)": {
                  w: "2em",
                  h: "2em",
                },
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <Card
            borderRadius={"1em"}
            bgColor={ThemeColor.backgroundColor}
            color={"white"}
          >
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    #ID
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    #12a2g
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    🏢 Company
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    PKNU
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    🗺️ Location
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Busan
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    ☏ Contact
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    lifthus531@gmail.com
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </TabPanel>
        <TabPanel>
          <p>
            <FormLabel textAlign={"center"} fontSize="1em" fontWeight={"bold"}>
              BIG 3
            </FormLabel>
            <StatGroup
              border={`ridge 0.1em ${ThemeColor.backgroundColor}`}
              borderRadius="1em"
              padding="0.5em"
            >
              <Stat>
                <StatLabel>Squat</StatLabel>
                <StatNumber>
                  {user_info.squat}
                  <Text display={"inline"} fontSize="0.5em">
                    kg
                  </Text>
                </StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
              </Stat>

              <Stat>
                <StatLabel>Benchpress</StatLabel>
                <StatNumber>
                  {user_info.benchpress}
                  <Text display={"inline"} fontSize="0.5em">
                    kg
                  </Text>
                </StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Deadlift</StatLabel>
                <StatNumber>
                  {user_info.deadlift}
                  <Text display={"inline"} fontSize="0.5em">
                    kg
                  </Text>
                </StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>
                  <Text>Total</Text>
                </StatLabel>
                <StatNumber>
                  {sbd_total}
                  <Text display={"inline"} fontSize="0.5em">
                    kg
                  </Text>
                </StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Stat>
            </StatGroup>
          </p>
          <p>
            <FormLabel textAlign={"center"} fontSize="1em" fontWeight={"bold"}>
              Body
            </FormLabel>
            <StatGroup
              border={`ridge 0.1em ${ThemeColor.backgroundColor}`}
              borderRadius="1em"
              padding="0.5em"
            >
              <Stat>
                <StatLabel>Height</StatLabel>
                <StatNumber>
                  {user_info.height}
                  <Text display={"inline"} fontSize="0.5em">
                    cm
                  </Text>
                </StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Weight</StatLabel>
                <StatNumber>
                  {user_info.body_weight}
                  <Text display={"inline"} fontSize="0.5em">
                    kg
                  </Text>
                </StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>
                  <Text>Fat Percentage</Text>
                </StatLabel>
                <StatNumber>
                  {user_info.fat_percentage}
                  <Text display={"inline"} fontSize="0.5em">
                    %
                  </Text>
                </StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Stat>
            </StatGroup>
          </p>
        </TabPanel>
        <TabPanel>프로필 설정</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ProfileTab;
