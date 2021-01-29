import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Review from './review';

const theme = {
  background: 'white',
  headerBgColor: 'rgb(59, 156, 253)',
  headerFontColor: '#fff',
  headerFontSize: '25px',
  botBubbleColor: 'rgb(59, 156, 253)',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  inputStyle:'lg',
};

class SimpleForm extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
        <ChatBot
        headerTitle="RAYS BOT"
        bubbleStyle={{fontSize:'16px'}}
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
                { value: 'No', label: 'No', trigger: 'warning' },
              ],
            },
            {
              id: 'warning',
              message: 'Sorry, but currently we can only book your appointments 😊',
              trigger: 'book',
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
              validator: (value) => {
                if (!(value)) {
                  return 'Enter the name';
                }
                return true
                }
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
              trigger: 'doctor-specialist',
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
              id: 'doctor-specialist',
              message: 'You are looking for a doctor in which department?',
              trigger: 'specialist',
            },
            {
              id: 'specialist',
              options: [
                { value: '  Cardiologist', label: 'Cardiologist', trigger: 'status' },
                { value: '  ENT specialist', label: 'ENT specialist', trigger: 'status' },
                { value: '  Dentist', label: 'Dentist', trigger: 'status' },
                { value: '  Paediatrician', label: 'Paediatrician', trigger: 'status' },
                { value: '  Neurologist', label: 'Neurologist', trigger: 'status' },
                { value: '  General Practitioner ', label: 'General Practitioner ', trigger: 'status' },
              ],
            },
            {
              id: 'status',
              message: 'Are you visiting for the first time, or is it a follow-up visit?',
              trigger: 'patient-status',
            },
            {
              id: 'patient-status',
              options: [
                { value: 'new', label: 'First Time', trigger: 'meeting' },
                { value: 'existing', label: 'Follow-Up', trigger: 'meeting' },
              ],
            },
            {
              id: 'meeting',
              message: 'When do you prefer to meet the doctor?',
              trigger:'slot',
            },
            {
              id: 'slot',
              options: [
                { value: 'next-available', label: 'Next available slot', trigger: '7' },
                { value: 'within-7-days', label: 'Within next 7 days', trigger: '7' },
                { value: 'within-15-days', label: 'Within next 15 days', trigger: '7' },
              ],
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
                { value: 'Specialist', label: 'Specialist', trigger: 'update-specialist' },
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
              id: 'update-specialist',
              update: 'specialist',
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
