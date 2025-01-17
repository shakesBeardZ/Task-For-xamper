import styled from 'styled-components';
import React, { Component } from 'react';
import Hoc from '../../../../../hoc/Hoc'
export const SectionBack = styled.div`
    margin: 80px 0;
    input {
        width: 100%;
        display: block;
        margin: 10px 0;
        padding: ${props => props.lang === 'ltr' ? '10px 0 10px 10px' : '10px 10px 10px 0px'}
    }
`


export const Title = styled.h3`
    color: #444;
    font-family: sans-serif;
    font-size: 32px;
    line-height: 1.7;
`

export const Send = styled.button`
    color: #fff;
    background-color: #493836;
    border: 1px solid #493836;
    padding: 10px 30px;
    font-size: 16px;
    transition: color .3s ease-out;
    cursor: pointer
    &:hover{
        background-color: #444
    }
`



