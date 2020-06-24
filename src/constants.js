import React from 'react';

export const stepsWithoutText = [
    {
      id: 1,
      status: 'Pending'
    },
    {
      id: 2,
      status: 'Pending'
    },
    {
      id: 3,
      status: 'Pending'
    },
    {
      id: 4,
      status: 'Pending'
    },
];

export const stepsWithText = [
    {
      id: 1,
      text: "Register your account",
      status: 'Pending'
    },
    {
      id: 2,
      text: 'Complete your wellness assessment', 
      status: 'Pending'
    },
    {
      id: 3,
      text: 'Link your account', 
      status: 'Pending'
    },
    {
      id: 4,
      text: 'Schedule your first call', 
      status: 'Pending'
    },
]

export const stepsWithProgress = [
    {
      id: 1,
      text: "Register your account",
      status: 'Pending',
      progress: 100
    },
    {
      id: 2,
      text: 'Complete your wellness assessment', 
      status: 'Pending',
      progress: 100
    },
    {
      id: 3,
      text: 'Link your account', 
      status: 'Pending',
      progress: 50
    },
    {
      id: 4,
      text: 'Schedule your first call', 
      status: 'Pending',
      progress: 0
    },
]

export const stepsWithColors = [
    {
      id: 1,
      text: "Register your account",
      status: 'Pending',
      color: "red"
    },
    {
      id: 2,
      text: 'Complete your wellness assessment', 
      status: 'Pending',
      color: "blue"
    },
    {
      id: 3,
      text: 'Link your account', 
      status: 'Pending',
      color: "green"
    },
    {
      id: 4,
      text: 'Schedule your first call', 
      status: 'Pending',
      color: "yellow"
    },
];

export const stepsWithCustomIcons = [
    {
      id: 1,
      text: "Register your account",
      status: 'Pending',
      icon: <i className="fa fa-location-arrow"></i>
    },
    {
      id: 2,
      text: 'Complete your wellness assessment', 
      status: 'Pending',
      icon: <i className="fa fa-minus"></i>
    },
    {
      id: 3,
      text: 'Link your account', 
      status: 'Pending',
      icon: <i className="fa fa-plane"></i>
    },
    {
      id: 4,
      text: 'Schedule your first call', 
      status: 'Pending',
      icon: <i className="fa fa-star"></i>
    },
];