#!/usr/bin/env python3

import sys
import json
import requests

HEADERS = {"Content-Type": "application/json"}

SYMBOLS_WITH_WEIGHTS = [
    ["BTC", 0.004909683753206196],
    ["ETH", 0.13310406316230874],
    ["BNB", 0.14811355573986523],
]


def main(url):
    symbols, weights = zip(*SYMBOLS_WITH_WEIGHTS)
    payload = {"symbols": symbols, "min_count": 10, "ask_count": 16}
    result = requests.request("POST", url, headers=HEADERS, json=payload).json()
    prices = [float(px["px"]) / float(px["multiplier"]) for px in result["result"]]
    acc = 0
    for (p, w) in zip(prices, weights):
        acc += float(p) * w
    return acc


if __name__ == "__main__":
    try:
        print(main(*sys.argv[1:]))
    except Exception as e:
        print(str(e), file=sys.stderr)
        sys.exit(1)