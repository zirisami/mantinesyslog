// LoginMantine.tsx
import React, { useState } from 'react';
import { Container ,Divider ,TextInput, Button, Paper } from '@mantine/core';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginMantine: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your login logic here using formData
    console.log('Logging in with:', formData);
  };

  return (
    <Container size="sm">
      <Paper style={{ padding: '50px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', borderRadius: '10px', marginLeft: '20px', marginTop: '20px', maxWidth: '300px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2 style={{ marginRight: '70px', marginBottom: '8px' }}>Login</h2>
          <p style={{ marginTop: '8px', marginBottom: '80px', marginLeft :'10px',textAlign: 'center', fontSize: '14px', color: 'gray' }}>
            Doesn't have an account yet? <a href="/signup">Sign Up</a>
            
          </p>
          <form onSubmit={handleLogin}>
            <TextInput
              label="Email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder='Your email'
            />
            <TextInput
              label="Password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder='Your password '
            />
            <Divider label="Or continue with email" labelPosition="center" my="lg" />
            <Button type="submit" fullWidth style={{ marginTop: '16px' }}>
              Login
            </Button>
            

          </form>
        </div>
      </Paper>
    </Container>
  );
};

export default LoginMantine;

