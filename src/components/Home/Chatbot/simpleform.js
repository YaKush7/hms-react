import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Review from './review';

const theme = {
  background: 'white',
  headerBgColor: 'rgb(59, 156, 253)',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: 'rgb(59, 156, 253)',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

class SimpleForm extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
        <ChatBot
        headerTitle="DocBot"
        floating="true"
        width="25%"
          steps={[
            {
                id: 'welcome',
                message: 'Hi There! Welcome to RAYS Hospital. A project on Hospital Systems by group 56.',
                trigger:'book',
            },
            {
              id: 'book',
              message: 'Do you want to book an appointment?',
              trigger:'Appoint',
            },
            {
              id:'Appoint',
              options: [
                { value: 'Yes', label: 'Yes', trigger: '1' },
                { value: 'No', label: 'No', trigger: 'book' },
              ],
            },
            {
              id: '1',
              message: 'What is your name?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}! What is your gender?',
              trigger: 'gender',
            },
            {
              id: 'gender',
              options: [
                { value: 'male', label: 'Male', trigger: '5' },
                { value: 'female', label: 'Female', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: 'How old are you?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: '6',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 0) {
                  return 'value must be positive';
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }
  
                return true;
              },
            },
            {
              id: '6',
              message: 'What is you contact number?',
              trigger: 'phone',
            },
            {
              id: 'phone',
              user: true,
              trigger: '7',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 999999999 ) {
                  return 'Enter a Valid Phone Number';
                }
  
                return true;
            },
          },
            {
              id: '7',
              message: 'Great! Check out your summary',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Would you like to update some field?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                { value: 'no', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'update-yes',
              message: 'What field would you like to update?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Name', trigger: 'update-name' },
                { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                { value: 'age', label: 'Age', trigger: 'update-age' },
                { value: 'phone', label: 'Contact', trigger: 'update-phone' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'update-gender',
              update: 'gender',
              trigger: '7',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: '7',
            },
            {
              id: 'update-phone',
              update: 'phone',
              trigger: '7',
            },

            {
              id: 'end-message',
              message: 'Thanks! Your request has been saved. We will contact you soon!',
              end: true,
            },
          ]}
        />
        </ThemeProvider>
      );
    }
  }
  
  export default SimpleForm;