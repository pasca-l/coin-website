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

import { coin_data } from "../../public/coin_data";

type CoinType = {
  uid: string;
  url: string;
  year: string;
  country: string;
  name: string;
  isCollected: number;
};

// type Props = CoinType[];

export const CoinList = () => {
  return (
    <SimpleGrid minChildWidth="320px" spacing="20px">
      {coin_data.map(({ uid, name, isCollected }: CoinType) => {
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
                  alt={name}
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

export async function getStaticProps() {
  return { propos: { coin_data } };
}
