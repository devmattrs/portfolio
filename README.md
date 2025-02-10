## Deployment

> [!NOTE]
> Deploying through SST in the Github Actions workflow
> The Github Actions workflow is configured to deploy the app to the stage specified in the `github.ref_name` variable.
> The `github.ref_name` variable is set to the branch name.
> The `github.ref_name` variable is set to the branch name.



```bash
pnpm sst deploy --stage ${{ github.ref_name }}
```

