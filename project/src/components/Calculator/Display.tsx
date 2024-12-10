import React from 'react';
import { motion } from 'framer-motion';

interface DisplayProps {
  value: string;
  expression: string;
}

export function Display({ value, expression }: DisplayProps) {
  return (
    <div className="flex h-32 w-full flex-col justify-end rounded-2xl bg-gray-800 p-4 text-right">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.7, y: 0 }}
        className="mb-1 min-h-6 text-lg text-gray-400"
      >
        {expression || '\u00A0'}
      </motion.div>
      <motion.div
        key={value}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white"
      >
        {value}
      </motion.div>
    </div>
  );
}