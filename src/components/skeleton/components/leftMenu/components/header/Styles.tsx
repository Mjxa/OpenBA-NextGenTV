/*
 * Copyright © 2022 Sinclair Broadcast Group
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import styled from 'styled-components';
import { minFixedSize, minSize } from 'styles/responsive.mixins';

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 23vw;
  padding-left: 3vw;
  margin-bottom: 2vh;
  height: 5vh;
`;

export const Data = styled.p`
  font-weight: 700;
  ${minSize('font-size', '2vw', '3vh')};
  ${minFixedSize('font-size', 10)};
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-weight: bold;
  padding-right: 2vw;
  ${minSize('font-size', '1.5vw', '3vh')};
  ${minFixedSize('font-size', 10)};
  text-transform: uppercase;
`;
