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

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useGoBack } from 'hooks/useGoBack';
import { useSkeletonMenu } from 'hooks/useSkeletonMenu';
import { MenuPosition } from 'hooks/useSkeletonMenu/skeletonMenuEnums';
import { skeletonMenuSelectors } from 'redux/slices/skeletonMenu';
import { RMPPlaceholder } from 'components/rmpPlaceholder';
import { BottomMenu } from './components/bottomMenu';
import { LeftMenu } from './components/leftMenu';
import { BottomMenuWrapper, Container } from './Styles';

export const Skeleton: FC = () => {
  useGoBack();
  const { getSkeletonComponent } = useSkeletonMenu();
  const leftElement = getSkeletonComponent(MenuPosition.WIDGET);
  const bottomElement = getSkeletonComponent(MenuPosition.BOTTOM_MENU);
  const tvElement = useSelector(skeletonMenuSelectors.getTVElement);

  return (
    <Container>
      <LeftMenu element={leftElement} />

      <BottomMenuWrapper>
        <RMPPlaceholder tvElement={tvElement} />

        <BottomMenu element={bottomElement} />
      </BottomMenuWrapper>
    </Container>
  );
};
