set -euo pipefail

echo "▶ TypeScript"
pushd typescript >/dev/null
pnpm install --frozen-lockfile || pnpm install
pnpm test
popd >/dev/null

echo "▶ Python"
pushd python >/dev/null
python -m venv .venv || true
source .venv/bin/activate
pip install -e '.[dev]' -q
pytest -q
deactivate
popd >/dev/null

echo "✅ Tudo ok"