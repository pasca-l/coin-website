import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Checkbox,
  Stack,
  StackDivider,
  SimpleGrid,
} from "@chakra-ui/react";

type CoinType = {
  uid: string;
  url: string;
  year: string;
  country: string;
  name: string;
  isCollected: number;
};

type Props = CoinType[];

export const CoinList = ({ coin_data }) => {
  console.log(coin_data);
  return (
    <SimpleGrid minChildWidth="500px" spacing="20px">
      {coin_data.data.map(({ uid, name, isCollected }) => {
        return (
          <Card key={uid}>
            <CardBody>
              <Stack
                direction={"row"}
                spacing="20px"
                divider={<StackDivider />}
              >
                <Image
                  src={"/images/" + uid + ".jpg"}
                  width={150}
                  height={150}
                  alt={"Image for: " + name}
                />
                <Stack direction={"column"} spacing="20px">
                  <Text>{name}</Text>
                  {!!isCollected ? (
                    <Checkbox defaultChecked></Checkbox>
                  ) : (
                    <Checkbox></Checkbox>
                  )}
                </Stack>
              </Stack>
            </CardBody>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};
