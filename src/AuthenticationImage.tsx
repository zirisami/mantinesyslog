import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';
import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
    Group ,
    Divider,

  } from '@mantine/core';
  import classes from './AuthenticationImage.module.css';
  
  function AuthenticationImage() {
    return (
      <div className={classes.wrapper}>
        <Paper p="xl"
          className={classes.container}
          radius="md"

          style={{
            borderRadius: '3px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            marginRight: '1000px',
          }}
        >
          <div className={classes.form}>
            <Title order={2} className={classes.title} ta="left" mt="md" mb={5}>
              Login
            </Title>
            <Text ta="center" mt="xs" style={{ marginBottom: '40px' }}>
              Don&apos;t have an account yet?{' '}
              <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()} style={{textDecorationLine : 'underline'}}>
                Sign Up
              </Anchor>
            </Text>
  
            <TextInput label="Email Adress" placeholder="Your email" size ="sm" />
            <Group justify="space-between" mb={5}>
        <Text component="label" htmlFor="your-password" size="sm" fw={500}>
          Password
        </Text>

        <Anchor href="#" onClick={(event) => event.preventDefault()} pt={3} fw={700} fz="xs">
          Forgot your password?
        </Anchor>
      </Group>
      <PasswordInput placeholder="Your password" id="your-password" />
            <Checkbox label="Remember me" mt="md" size="sm" />
            <Button fullWidth mt="xl" size="md">
              Login
            </Button>
            <Divider label="Or Login with" labelPosition="center" my="lg" />

            <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>
          </div>
        </Paper>
      </div>
    );
  }
  
  export default AuthenticationImage;
  
  