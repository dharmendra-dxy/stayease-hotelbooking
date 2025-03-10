'use client'

import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Copy, Share2 } from "lucide-react";
import { Button } from "./ui/button";

const ShareButton = ({id}: {id: string}) => {

  const [isCopied, setIsCopied] = useState(false)

  const handleCopyToClipboard = async() => {
    await navigator.clipboard.writeText(id);
    setIsCopied(true);

    setTimeout(()=> setIsCopied(false), 5000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <Share2 className="h-5 w-5" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Hotel</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                name="input"
                defaultValue={id}
                readOnly
              />
            </div>
            <Button
              type="submit"
              size="sm"
              className="px-3"
              onClick={handleCopyToClipboard}
            >
              <span className="sr-only">Copy</span>
              { isCopied ? <Check/>: <Copy/>}
            </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareButton;
