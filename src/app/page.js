"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        minRows={3}
        mt="xs"
        placeholder="Do you enjoy eating?"
        label="Your review "
      />
      <Button mt="xs" type="submit" color="orange">
        Submit Review
      </Button>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk </Title>
        <Rating defaultValue={5} count={5} />
      </Group>
      <Text align="center" color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck </Title>
        <Rating defaultValue={4} count={5} />
      </Group>
      <Text align="center" color="dimmed">
        My favourite part is pepperoni
      </Text>
      <Pagination mt="md" position="center" total={20} color="orange" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Supatkorn Pundontong 650610812
      </Text>
    </Container>
  );
}
