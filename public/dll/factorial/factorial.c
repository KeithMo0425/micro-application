#include <stdint.h>

#if defined(WIN32) || defined(_WIN32) || defined(WIN64) || defined(_WIN64)
#define EXPORT __declspec(dllexport)
#else
#define EXPORT
#endif

EXPORT uint64_t factorial(int max) {
  int i = max;
  uint64_t result = 1;

  while (i >= 2) {
    result *= i--;
  }

  return result;
}