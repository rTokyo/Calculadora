import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Display } from './Display';
import { evaluate } from '../../utils/calculator';

export function Calculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (num: string) => {
    if (shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (op: string) => {
    setShouldResetDisplay(true);
    setExpression(expression + display + ' ' + op + ' ');
  };

  const handleEqual = () => {
    const result = evaluate(expression + display);
    setDisplay(result.toString());
    setExpression('');
    setShouldResetDisplay(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setExpression('');
    setShouldResetDisplay(false);
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full max-w-sm rounded-3xl bg-gray-100 p-6 shadow-2xl"
    >
      <Display value={display} expression={expression} />
      
      <div className="mt-6 grid grid-cols-4 gap-3">
        <Button value="C" onClick={handleClear} variant="secondary" />
        <Button value="±" onClick={() => setDisplay((prev) => (Number(prev) * -1).toString())} variant="secondary" />
        <Button value="%" onClick={() => setDisplay((prev) => (Number(prev) / 100).toString())} variant="secondary" />
        <Button value="÷" onClick={() => handleOperator('/')} variant="operator" />

        <Button value="7" onClick={() => handleNumber('7')} />
        <Button value="8" onClick={() => handleNumber('8')} />
        <Button value="9" onClick={() => handleNumber('9')} />
        <Button value="×" onClick={() => handleOperator('*')} variant="operator" />

        <Button value="4" onClick={() => handleNumber('4')} />
        <Button value="5" onClick={() => handleNumber('5')} />
        <Button value="6" onClick={() => handleNumber('6')} />
        <Button value="-" onClick={() => handleOperator('-')} variant="operator" />

        <Button value="1" onClick={() => handleNumber('1')} />
        <Button value="2" onClick={() => handleNumber('2')} />
        <Button value="3" onClick={() => handleNumber('3')} />
        <Button value="+" onClick={() => handleOperator('+')} variant="operator" />

        <Button value="0" onClick={() => handleNumber('0')} className="col-span-2" />
        <Button value="." onClick={() => handleNumber('.')} />
        <Button value="=" onClick={handleEqual} variant="operator" />
      </div>
    </motion.div>
  );
}