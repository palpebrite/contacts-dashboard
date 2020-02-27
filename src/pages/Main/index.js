import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  Box,
  Container,
  Button,
  Typography,
  TextField,
} from '@material-ui/core';

import { Footer, Form } from './styles';

export default function Main() {
  const initialContact = {
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    name: '',
    email: '',
    phone: '',
  };

  const [contact, setContact] = useState(initialContact);
  const [toContacts, setToContacts] = useState(false);

  const { name, email, phone } = contact;

  const handleInputChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      id: contact.contacts.length,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    };

    contact.contacts.push(data);

    localStorage.setItem('contacts', JSON.stringify(contact.contacts));

    alert('Contato cadastrado com sucesso!');

    setTimeout(() => setToContacts(true), 500);
  };

  return (
    <>
      {toContacts ? <Redirect to="/contacts" /> : null}
      <Box textAlign="center" p={2}>
        <Container maxWidth="sm">
          <Typography variant="h4">Adicionar contato</Typography>
          <Form onSubmit={handleSubmit}>
            <TextField
              id="name"
              variant="outlined"
              type="text"
              margin="normal"
              autoComplete="name"
              autoFocus
              fullWidth
              required
              color="primary"
              name="name"
              label="Nome completo"
              value={name}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              type="email"
              margin="normal"
              autoComplete="email"
              fullWidth
              required
              color="primary"
              name="email"
              label="E-mail"
              value={email}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              type="tel"
              margin="normal"
              autoComplete="phone"
              fullWidth
              required
              color="primary"
              name="phone"
              label="Telefone"
              value={phone}
              onChange={handleInputChange}
            />
            <Button size="large" type="submit" variant="contained" color="primary" fullWidth>
              Enviar
            </Button>
          </Form>
        </Container>
      </Box>
      <Footer>
        <Link to="/contacts">Listar contatos</Link>
      </Footer>
    </>
  );
}
