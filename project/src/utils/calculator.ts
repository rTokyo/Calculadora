export function evaluate(expression: string): number {
  try {
    // Remove trailing operators and spaces
    const cleanExpr = expression.trim().replace(/[+\-*/]\s*$/, '');
    // Use Function instead of eval for better security
    return new Function(`return ${cleanExpr}`)();
  } catch (error) {
    return 0;
  }
}