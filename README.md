# Fetch CPU core count [![CI build][1]][2]

This is a GitHub action that makes the logical CPU core count on the action
runner available for jobs.

## Outputs

### `count`

Logical core count.  
This is not the same as physical core count.

### `plus_one`

`count` plus one.

### `plus_two`

`count` plus two.

## Example usage

    - uses: friendlyanon/fetch-core-count@v1
      id: cores
    
    - name: Run CMake with optimal job count
      run: cmake --build build -j ${{ steps.cores.outputs.plus_one }}

# License
[MIT License](LICENSE)

[1]: https://github.com/friendlyanon/fetch-core-count/workflows/CI/badge.svg
[2]: https://github.com/friendlyanon/fetch-core-count/actions?query=workflow%3ACI+branch%3Amaster
