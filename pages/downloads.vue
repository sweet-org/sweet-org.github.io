<template>
  <div class="mx-auto max-w-2xl py-16 sm:py-48 lg:py-32">
    <div class="text-center">
      <h1 class="text-2xl font-bold tracking-tight text-gray-300 sm:text-6xl">Downloads</h1>
      <p class="mt-6 mb-4 text-lg leading-8 text-gray-300">
        The Eve Echoes fitting calculator. It allows you to create skill and implant profiles, create ship
        fittings and will show you the calculated values for the attributes of the selected items.
      </p>

    </div>

    <div v-if="!isLoading && operatingSystems != null" class="text-center">
      <div class="mb-4 inline-flex rounded-md shadow-sm" role="group">
        <button v-for="(os, index) in operatingSystems" :key="'btn_os_' + os.key" :class="{'item-active': os == selectedOs,
                         'rounded-s-lg border-s': index==0, 'rounded-e-lg border-e': index==operatingSystems.length - 1}"
                class="border-t border-b vert-btn-group"
                type="button"
                @click="selectOs(os)">
          {{ os.name }}
        </button>
      </div>
      <div v-if="selectedOs != null && !selectedOs.needsFormatting" class="text-center mb-8">
        <a class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
           :href="getDownloadURL">
          Download from store
        </a>
      </div>
      <div class="flex flex-wrap-reverse justify-around place-items-start">
        <div class="flex-none w-48 mt-2 list-group">
          <div class="pb-0.5 bg-gray-500 rounded">Select a version</div>
          <button v-for="(version, index) in versions" :class="{'item-active': version == selectedVersion,
                         'rounded-t-lg': index==0, 'rounded-b-lg': index==versions.length - 1, 'item-disabled': !version.available}"
                  class="list-group-item flex"
                  type="button"
                  @click="selectVersion(version)">
            <span class="flex-none">v{{ version.name }}</span>
            <span v-if="version.branch == 'beta'" class="text-slate-300 grow ml-0.5">(beta)</span>
            <span v-if="version.branch == 'stable'" class="text-slate-300 grow ml-0.5">(stable)</span>
            <span class="flex-non text-blue-400">b.{{ version.buildNum }}</span>
          </button>
        </div>
        <div class="flex-none">
          <div class="list-group flex flex-col grow px-4" v-if="selectedVersion != null">
            <div class="flex-none py-0.5 border-b-2 border-gray-500 text-left text-xl">v{{ selectedVersion.name }}</div>
            <div class="flex-none py-0.5 border-b border-gray-500 text-left">Date: {{ selectedVersion.releaseDate }}</div>
            <div class="flex-none py-0.5 border-b border-gray-500 text-left">Branch: {{ selectedVersion.branch }}</div>
            <div class="flex-none py-0.5 border-b border-gray-500 text-left">Build: {{ getBuildNum() }}</div>
            <a class="flex-none mt-2 mb-4 py-1 text-gray-800 bg-emerald-400 rounded-xl hover:bg-emerald-500 shadow-lg shadow-cyan-800/80"
               :href="getDownloadURL">
              Download
            </a>
          </div>
          <div class="list-group flex flex-col grow px-4" v-else>
            <div class="flex-none py-0.5 pb-1 text-left text-xl">No version selected</div>
            <div class="flex-none py-0.5 pb-1 text-left">Select a version from the menu</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="isLoading" class="text-center">
      <div role="status">
        <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
             fill="none" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"/>
          <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
      </div>

    </div>
    <div v-else class="flex justify-center">
      <div class="block max-w-sm p-6 border rounded-lg shadow bg-red-900 border-red-600">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-300">Failed to resolve versions</h5>
        <p class="font-normal text-gray-400" v-if="errorMsg != null">{{ errorMsg }}</p>
        <p class="font-normal text-gray-400 italic">Please contact an administrator if this issue persists.</p>
      </div>
    </div>
    <h2>Changelist</h2>
    <ContentRenderer :value="data" class="markdown mt-4"/>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'

const versions = ref([]);
const notifications = ref({});
const operatingSystems = ref(null);
const selectedVersion = ref(null);
const selectedOs = ref(null);
const isLoading = ref(true);
const errorMsg = ref(null);
let downloadBuildNums = {};


useAsyncData("versions", () => queryContent('/versions').findOne()).then(({data, error}) => {
  if (error.value != null) {
    console.error("Error while fetching versions: %s", error);
    console.log(error.name);
    errorMsg.value = `${error.name} while fetching versions: ${error.status}: ${error.statusText}`;
    return;
  }
  for (let v in data.value['version']) {
    v['available'] = false;
  }
  versions.value = data.value['versions'];
  notifications.value = data.value['notifications'];
  operatingSystems.value = data.value['operatingSystems'];
  downloadBuildNums = data.value['downloads'];

}).catch((error) => {
  console.error("Error while fetching versions: %s", error);
}).finally(() => {
  isLoading.value = false;
});
// Does not work for static sites
/*let osKey = null;
const { isWindows, isMacOS, isLinux, isAndroid, isIos } = useDevice();
if(isAndroid) {
  osKey = "android";
} else if(isIos) {
  osKey = "ios";
} else if (isWindows) {
  osKey = "windows";
} else if(isMacOS) {
  osKey = "macos";
} else if(isLinux) {
  osKey = "linux";
}
console.log("Detected OS: %s", osKey);
for (let os of operatingSystems.value) {
  if (os.key == osKey) {
    selectOs(os);
    break;
  }
}*/

const {data} = await useAsyncData('changelist', () => queryContent('changelist').findOne())

if (!String.prototype.formatted) {
  String.prototype.formatted = function() {
    const args = arguments;
    if (args.length != 1) throw TypeError("Expected a dictionary like object as first parameter");
    const kwargs = args[0];
    return this.replace(/\{(\w+)}/g, function(match, key) {
      return kwargs[key] != undefined
          ? kwargs[key]
          : match;
    });
  };
}

const getDownloadURL = computed(() => {
  if (selectedOs == null) {
    return null
  }
  if (!selectedOs.value['needsFormatting']) {
    console.log("Selected OS does not need formatting: %s", selectedOs.value.url);
    return selectedOs.value.url;
  }
  const url = selectedOs.value["url"].formatted({
    "name": selectedVersion.value["name"],
    "branch": selectedVersion.value["branch"],
    "releaseDate": selectedVersion.value["releaseDate"],
    "buildNum": getBuildNum(selectedOs.value["key"], selectedOs.value["name"], selectedVersion.value["buildNum"]),
  });
  console.log("Formatted URL: %s", url);
  return url;
});

function getBuildNum(
    os: string | null = null,
    version: string | null = null,
    defaultVersion: number | null = null): number | null {
  if (os == null) {
    os = selectedOs.value.key;
    defaultVersion = selectedVersion.value.buildNum;
  }
  if (version == null) os = selectedOs.value.key;
  if (version == null) version = selectedVersion.value.name;
  if (!downloadBuildNums[os]) return defaultVersion;
  if (!downloadBuildNums[os][version]) return defaultVersion;
  return downloadBuildNums[os][version];
}

function selectOs(os) {
  selectedVersion.value = null;
  if (os == null) {
    selectedOs.value = null;
    for (let v in versions.value) {
      v['available'] = true;
    }
    return;
  }
  selectedOs.value = os;
  if (!downloadBuildNums[os.key]) {
    for (let v of versions.value) {
      if (selectedVersion.value == null) selectedVersion.value = v;
      v['available'] = true;
    }
  } else {
    const builds = downloadBuildNums[os.key];
    for (let v of versions.value) {
      v['available'] = builds[v['name']] != undefined;
      if (v['available'] && selectedVersion.value == null) selectedVersion.value = v;
    }
  }

}

function selectVersion(version) {
  if (version == null) {
    selectedVersion.value = null;
    return;
  }
  if (!version['available']) {
    return;
  }
  selectedVersion.value = version;
}

</script>

<style scoped>

</style>