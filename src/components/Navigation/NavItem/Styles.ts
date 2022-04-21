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
import { convertPxToVh, convertPxToVw, minSize } from 'styles/responsive.mixins';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 6px;
`;

export const ItemText = styled.span<{ fontSize?: number }>`
  min-width: max-content;
  margin: 0 0.2vw;
  color: #e5e5e5;
  font-weight: bold;
  text-transform: uppercase;
  ${({ fontSize = 20 }) =>
    minSize('font-size', `${convertPxToVw(fontSize)}`, `${convertPxToVh(fontSize)}`)};
`;
