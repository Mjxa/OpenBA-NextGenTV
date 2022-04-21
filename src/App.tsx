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

import { useSelector } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { useAppConfigFetch } from 'hooks/useAppConfig';
import { appConfigSelectors } from 'redux/slices/appConfig';
import { AppContent } from './AppContent';
import { AppInit } from './AppInit';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

export function App() {
  useAppConfigFetch();

  const appConfigLoaded = useSelector(appConfigSelectors.getAppConfigLoaded);
  const disableAlerts = useSelector(appConfigSelectors.getDisableAlerts);

  if (!appConfigLoaded) return null;

  return (
    <Router>
      <AppContent />
      {!disableAlerts && <AppInit />}
    </Router>
  );
}
